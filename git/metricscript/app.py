import requests
import schedule
import time
from datetime import datetime
import csv
import json

def send():
    try:
        with open('config.json') as json_file:
            data = json.load(json_file)['config']
            base_url = data[0]['get_url']
            get_auth = data[0]['get_auth']
            post_url = data[0]['post_url']
            post_auth = data[0]['post_auth']
          #  post_cookie = data[0]['post_cookie']   
            global intreval_time 
            intreval_time = data[0]['intreval']
            
        json_file.close()
            
        if "" in { base_url, get_auth, post_url, post_auth }:
            raise Exception("Incomplete values in config file")
        
        get_payload  = {}
        get_headers = {
            'en': '',
            'Authorization': 'Basic ' + get_auth
        }

        post_headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + post_auth
        #    'Authorization': 'Basic ' + post_auth,
        #    'Cookie': post_cookie
        }
        
        with open("metrics.csv", newline='') as csv_file:
            print("Starting run. Time: " + str(datetime.now()))
            csv_reader = csv.reader(csv_file, delimiter=',')
            for row in csv_reader:
                metric_name = row[1]
                service = row[0]
                namespace = row[2]
                url = base_url + "/api/v1/query?query=avg(irate(" + metric_name + '{app=\"' + service + '\",kubernetes_namespace=\"' + namespace + '\"}[1m])) by (kubernetes_namespace,app)'
                # print("URL = " + url)

                response = requests.request("GET", url, headers=get_headers, data=get_payload)
                data_json = response.json()

                print("Fetch from api status code: " + str(response.status_code))

                if len(data_json['data']['result']) >= 1:
                    value = data_json['data']['result'][0]['value'][1]
                    timestamp = str(data_json['data']['result'][0]['value'][0]).replace('.', '')

                    post_payload = '[{"metric_type": "' + metric_name + '","resource": "","node": "","value": ' + value + ',"timestamp": ' + timestamp + ',"ci2metric_id": {"name": "' + service + '"}, "source": "Prometheus"}]'

                    print("Post Payload: " + post_payload)

                    r = requests.post(post_url, headers=post_headers, data=post_payload)
                    print("Posting data. Status code: " + str(r.status_code) + "\n")
                else:
                    print("---Record returned no results" + "\n")

        csv_file.close()

    except Exception as e:
        print("An error occured")
        print(e)

send()
schedule.every(intreval_time).seconds.do(send)

while 1:
    schedule.run_pending()
    time.sleep(1)
