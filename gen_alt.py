import json

with open('gg.json') as f:
  metadata = json.load(f)

with open('gg.json', 'w+') as f:
   json.dump(metadata, f, sort_keys=True)
