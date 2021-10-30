import json

with open('drops.json') as f:
    data = json.load(f)

idx = 1
for d in data:
    drop = []
    for idx, item in enumerate(data[d]):
        drop.append({"label": item, "value": idx + 1});
    with open(f'data/drops/{d}Drops.json', 'w+') as file:
        json.dump(drop, file)
