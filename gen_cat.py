import json

with open('generate_cat.json') as f:
  data = json.load(f)

for d in data:
    idx = 1
    for k in data[d]:
        k['value'] = idx
        idx += 1

with open('generate_cat.json', 'w') as file:
    json.dump(data, file)
