cmsBaseUrl = 'https://cjcms.mbtl.life'

def imageSource(image, format):
    imageFormats = image['formats']
    desiredFormatExists = format in imageFormats
    if desiredFormatExists:
        imageInDesiredFormat = imageFormats[format]
        return cmsBaseUrl + imageInDesiredFormat['url']
    else:
        return cmsBaseUrl + image['url']

import requests
import urllib.request
from pathlib import Path

def dumpFromLocalization(localizationId, localizationName):
    pensjonUrl = cmsBaseUrl + '/localizations/' + str(localizationId)
    resp = requests.get(url=pensjonUrl)
    pensjonData = resp.json()
    pensjonImages = pensjonData['images']
    print(pensjonImages)

    localizationDirectory = 'pobrane_ze_strony/' + localizationName
    Path(localizationDirectory).mkdir(parents=True, exist_ok=True)

    for image in pensjonImages:
        imageSourceUrl = imageSource(image, 'large')
        print(imageSourceUrl)
        locallImageName = localizationDirectory + '/' + image['hash'] + image['ext']
        urllib.request.urlretrieve(imageSourceUrl, locallImageName)

dumpFromLocalization(1, 'pensjonat')
dumpFromLocalization(2, 'apartamenty')