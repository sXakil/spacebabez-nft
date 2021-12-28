from PIL import Image
import random
from os import listdir

def setUp(folderName):
    def getName(a):
        if type(a) is bytes:
            iFolder = i.decode("utf-8")
        else:
            iFolder = a
        return iFolder
    fileStructure = {}
    for i in listdir(folderName):
        iFolder = getName(i)
        fileStructure[iFolder] = []
        for o in listdir(folderName + "/" + iFolder):
            file = getName(o)
            fileStructure[iFolder].append(file)
    return fileStructure

paths = setUp("mainFiles/Stars")
width = 576
height = 700

def generateBG(bgColor):
    backG = Image.open("background.png").convert("RGB")
    for j in range(random.randint(50, 150)):
        IStar = random.choice(paths[bgColor])
        TStar = Image.open(f"mainFiles/Stars/{bgColor}/{IStar}")
        backG.paste(TStar, (random.randint(0, width), random.randint(0, height)), TStar)
    return backG