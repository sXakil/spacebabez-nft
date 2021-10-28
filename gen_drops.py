import json

with open('drops.json') as f:
  data = json.load(f)

idx = 1
for d in data:
  with open(f'data/drops/{d}Drops.json', 'w+') as file:
    json.dump(data[d], file)
