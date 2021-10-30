import json

with open('metadata.json') as f:
  data = json.load(f)

idx = 1
for d in data:
    d['id'] = idx
    idx += 1

with open('metadata.json', 'w') as file:
    json.dump(data, file)

