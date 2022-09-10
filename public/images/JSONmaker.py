#This script is only for to make the pictures in the directories to a proper json for the photoswiper

import json
from PIL import Image
import os

dirs = []
data = {}


for filename in os.listdir(os.getcwd()):
    if os.path.isdir(filename):
        dirs.append(filename)

old_dir = os.getcwd()
for path in dirs:
    array = []
    os.chdir(path)
    print(f"The folder that opened is: {os.getcwd()}")
    i = 1
    for filename in os.listdir(os.getcwd()):
        img_data = {}
        img_data['id'] = i
        i += 1
        img_data['image'] = f"/images/{path}/{filename}"
        print(f"Read file: /images/{path}/{filename}")
        width,height = Image.open(filename).size
        img_data['width'] = width
        img_data['height'] = height
        print(f" Width: {width} Height: {height}")
        array.append(img_data)
    data[str(path)] = array
    os.chdir(old_dir)

with open('pictures.json', 'w', encoding='utf-8') as f:
    print("Writing to the pictures.json file...")
    json.dump(data, f, ensure_ascii=False, indent=4)
    print("Done")
    