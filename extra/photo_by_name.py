import googlemaps
import urllib.request
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv('MAPS_API_KEY')

gmaps = googlemaps.Client(key=API_KEY)

def find_by_name(name):
    place = str(name)
    response = gmaps.places(query=place)

    if response['results']:
        first_place = response['results'][0]

        if 'photos' in first_place:
            photos = first_place['photos']

            for i, photo in enumerate(photos):
                photo_reference = photo['photo_reference']
                photo_url = f"https://maps.googleapis.com/maps/api/place/photo?maxwidth=4000&photoreference={photo_reference}&key={API_KEY}"

                # file_name = f"photo_{i}.jpg"
                # urllib.request.urlretrieve(photo_url, file_name)
                # print('URL:', photo_url)
                # print(f"Photo {i + 1} downloaded and saved as {file_name}.")
                return photo_url
        else:
            print("No photos found for the place.")
    else:
        print("Place not found.")

print(find_by_name('Universitas Brawijaya'))

