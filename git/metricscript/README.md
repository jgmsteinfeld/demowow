# Prometheus Extract
This script was tested using Python 3.9.0

##### Requirements
- Python 3
- Pip3

##### Installation
1. Clone repo to desired directory
2. Navigate to the repo directory
3. Run `pip3 install -r req.txt`
4. Enter urls and keys into `config.json`
    | Variable | Type |
    | --- | --- |
    | get_url | string |
    | get_auth | string |
    | post_url | string |
    | post_auth | string |
    | post_cookie | string |
    | intreval | number in seconds |
5. Fill out the `metrics.csv` file with proper data   
6. Run `python3 app.py`
