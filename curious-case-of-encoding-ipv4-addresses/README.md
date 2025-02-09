# The curious cases of encoding ipv4 addresses

Written by birkj

When most of us think of ipv4 addresses, we often associate it as the standard encoding 

```
255.0.27.136
```

In fact, i have never seen *any* ipv4 addresses encoded differently before i researched it.

### Background

I was attempting the [HTB Proxy](https://ctf.hackthebox.com/event/1434) challange, where you are attempting to hack through a HTTP proxy server and into a backend server. In this challange we had access to the source code of a HTTP proxy server. I was playing around attempting to bypass some hard coded filters on the proxy. The proxy had an "isIpv4" and "isDomain" check that you had to pass.

In short, the filters catches loopback addresses like localhost and "127." addresses, but we could access the server directly through the subnet.

We found an address of interest through recon.

```
192.23.12.206
```

One of the filters on the proxy had a check for typical subnets, including "192.", which meant i had to try to get creative.

## Ipv4 parses allow different encodings

It turns out some ipv4 parsers will happily accept several different kinds of encoding. 

Lets explore with a loopback address

```
127.0.0.1
```

A hex format of the same address would translate to 

```
0x7f.0x00.0x00.0x01
```

```
$ ping 0x7f.0x00.0x00.0x01
PING 0x7f.0x00.0x00.0x01 (127.0.0.1) 56(84) bytes of data.
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.071 ms
```

Let's see what else will it parse, have you tried a dotless ipv4 address before?

```
$ ping 0x7f000001
PING 0x7f000001 (127.0.0.1) 56(84) bytes of data.
```

The browser will also accept these formats.

Ipv4 is really just a number, zero through 4,294,967,296 (2^32) or 32 bits.
Therefore, like the hex format, it also will accept a dotless decimal number:

```
bravo@bravo:~/personal/writeups$ ping 2130706433
PING 2130706433 (127.0.0.1) 56(84) bytes of data.
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.068 ms
```

.. or even the octal format

```
$ ping 017700000001
PING 017700000001 (127.0.0.1) 56(84) bytes of data.
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.063 ms
```

```
$ ping 0177.0000.0000.0001
PING 0177.0000.0000.0001 (127.0.0.1) 56(84) bytes of data.
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.068 ms
```

Some parsers will also accept multiple of these formats. Like 127.1 (since 0.0.1 => 1)

```
$ ping 127.1
PING 127.1 (127.0.0.1) 56(84) bytes of data.
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.048 ms
```

in fact it will happily accept all of these encodings combinded, here with ocatal, hex, and decimal
```
$ ping 0177.0x00.1
PING 0177.0x00.0x00.1 (127.0.0.1) 56(84) bytes of data.
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.078 ms
```

Here are some ipv4 converters [octal](https://www.browserling.com/tools/ip-to-oct), [hex](https://www.browserling.com/tools/ip-to-hex), [decimal](https://www.browserling.com/tools/ip-to-dec)


### Applying this knowledge to the challange

In the end, it didn't really help for the challange, the filters were too great. But i still found it interesting enough to document it.

A solution to the challange is by leveraging a really cool service by [nip.io](https://nip.io/).

