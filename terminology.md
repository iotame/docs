# iotame Terminology

### Device
Devices are the basic building blocks in iotame. They can be actuators, sensors or both. They do not need to be physical devices, they might as well be a web server or API. In order for a device to be functional it needs to support at least one of the following:

- Being read from (_passive_)  
  The device manages a state, but needs to be queried by the server in order for it to receive the state.
- Being written to (_passive_)  
  Actuators or any kind of device that can react when receiving some kind of external event (e.g. a HTTP request)
- Reporting its state (_active_)  
  The device automatically informs the server about its state

### Channel
Channels are ways of communicating with devices, sucha s Bluetooth, TCP packages, MQTT or HTTP. These channels are embedded within iotame's core, so it can correctly manage incoming and outgoing connections.

### Protocol
A protocol is a generalization of means to communicate with a device. A protocol specifies exactly how data needs to be encoded over a channel in order to perform the wanted action.
