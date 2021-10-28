import json

with open('./metadata.json') as metadata:
    data = json.load(metadata)

idx = 1
for d in data:
    data['id'] = id
    id += 1

with open('./metadata.json', 'r+') as file:
    json.dump(data)
