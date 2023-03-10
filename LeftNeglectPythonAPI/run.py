'''
run.py

Runs Bluetooth scanner and connects to BLE device for
DTC 1 Left Neglect (2023-Winter-Section 1-Team 1) proof of concept

Andrew Li
Northwestern University 2026
Created for DTC 1, Winter Quarter 2023
'''

from ctypes import *
import argparse
import asyncio
from bleak import BleakScanner, BleakClient

_SERVICE_UUID = "c992461a-ca75-4101-891b-a2f2dab9d60c" # Actual device
_BUZZ_UUID = "a13b1961-f06d-4a9e-ad51-85847eda93eb" # Buzzer UUID, set this one
_BATTERY_UUID = "027644c1-2a37-4df8-86f8-76c922070a4e" # Battery level for buzzer
_DATA_CHAR = "7fd335c0-00cd-4207-b5dd-65773dd09790" # data

class MPUData(LittleEndianStructure):
    _fields_ = [("yaw", c_float),
                ("pitch", c_float),
                ("roll", c_float),
                ("accelX", c_float),
                ("accelY", c_float),
                ("accelZ", c_float),
                ("gyroX", c_float),
                ("gyroY", c_float),
                ("gyroZ", c_float),
                ("time", c_ulong)]

async def connect():
    print("**SCANNING")

    devices = await BleakScanner.discover(
        return_adv=True, service_uuids=[_SERVICE_UUID]
    )

    if(len(devices) < 1):
        print("**CANNOT FIND DEVICE")
        return
    
    if(len(devices) > 1):
        print("**TOO MANY DEVICES")
        return
    
    # for device in devices:
    #     print device
    
    async with BleakClient(
        list(devices.keys())[0],
        services=[_SERVICE_UUID]) as client:
        print("connected!")
        return client

async def read(client: BleakClient) -> MPUData:
    # Read from device and parse it as MPUData
    gatt = (await client.read_gatt_char(_DATA_CHAR))
    data = MPUData.from_buffer(gatt)
    print(data)

    # Handle data here
    # Also note that calibration would involve another number --> that number can be subtracted/added as necessary
    print(f"Normalized number of degrees = {data.roll/360}")

    return data

# Write token to device UUID
async def write(token, client: BleakClient) -> bool:
    # Write gatt char to device
    await client.write_gatt_char(char_specifier = _DATA_CHAR, data = token)
    print(f"wrote {token} to device")
    return True
    
# Set buzzer UUID to 1, and then 0
async def buzz():
    await write(b'1', _BUZZ_UUID) # buzz
    await write(b'0', _BUZZ_UUID) # stop buzzing

async def main() :
    client = await connect()
    if not client:
        return 
    
    client.mtu_size = 517

    await read(client)
    await write(b'1', client)

if __name__ == "__main__":
    asyncio.run(main())
