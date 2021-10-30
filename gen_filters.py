import json

with open('ddd.json') as f:
  drops = json.load(f)

with open('metadata.json') as f:
  metadata = json.load(f)

data = {}

for d in drops:
    data[d] = {}
    for i in range(1, len(drops[d])+1):
        data[d][i] = []

for meta in metadata:
    for key in meta:
        if key == 'id':
            continue
        if key == 'power':
            for X in meta[key].split(' + '):
                id = drops[key].index(X) + 1
                data[key][id].append(meta["id"])
        else:
            id = drops[key].index(meta[key]) + 1
            data[key][id].append(meta["id"])

for d in data:
    with open(f'data/{d}.json', 'w+') as f:
        json.dump(data[d], f)
