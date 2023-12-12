from scapy.all import *

# wireshark filter ip.flags.rb == 0x1

def parse_pcap(file_path):
    packets = rdpcap(file_path)

    packet_dict = {}
    special_dict = {}
    for packet in packets:
        if 'IP' in packet:
            dest_address = packet['IP'].dst
            packet_data = "%"
            if packet.getlayer(Raw):
                packet_data = chr(int(packet[Raw].load.decode('utf-8'), 2))

            if dest_address not in packet_dict:
                packet_dict[dest_address] = []
                special_dict[dest_address] = []

            packet_dict[dest_address].append(packet_data)

    return packet_dict

if __name__ == "__main__":
    pcap_file = "/home/delta/personal/writeups/p26e-julekalender-2023/12pakkestorm/fangede_pakker_onde.pcap"
    result_dict = parse_pcap(pcap_file)

    list = []
    for destination, data_list in result_dict.items():
        str = ""
        for idx, data in enumerate(data_list, start=1):
            str += data
        list.append(str)
    with open("result.txt", "w") as file:
        for line in list:
            file.write(line)
