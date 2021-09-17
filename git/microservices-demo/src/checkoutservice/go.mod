module github.com/pangealab/helios/src/checkoutservice

go 1.15

require (
	cloud.google.com/go v0.65.0
	contrib.go.opencensus.io/exporter/jaeger v0.2.0
	contrib.go.opencensus.io/exporter/stackdriver v0.5.0
	github.com/golang/protobuf v1.5.2
	github.com/google/uuid v1.2.0
	github.com/lightstep/otel-launcher-go v0.20.0
	github.com/sirupsen/logrus v1.6.0
	go.opencensus.io v0.22.5
	go.opentelemetry.io/contrib/instrumentation/google.golang.org/grpc/otelgrpc v0.20.0
	golang.org/x/net v0.0.0-20210119194325-5f4716e94777
	google.golang.org/grpc v1.37.0
)
