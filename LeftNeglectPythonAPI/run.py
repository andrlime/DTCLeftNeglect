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

async def read() -> MPUData:
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
    
    async with BleakClient(
        list(devices.keys())[0],
        services=[_SERVICE_UUID]) as client:
        print("connected!")

        gatt = (await client.read_gatt_char(_DATA_CHAR))
        data = MPUData.from_buffer(gatt)
        return data

if __name__ == "__main__":
    asyncio.run(read())