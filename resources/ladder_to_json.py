#an expansion, and experiment with the 5bx data.
#this program converts the data from csv to json.

import json
import csv
data_list = []
f = open('ladder.txt', 'rb')

reader = csv.DictReader(f)
     
        
for line in reader:
    data_list.append(line)


for rung in data_list:

    
    print json.dumps({"Rung":rung["Rung"],
                      "Bend":rung["Bend"],
                      "Leg Lift":rung["Leg Lift"],
                      "Pushup":rung["Pushup"],
                      "Run and Jump":rung["Run and Jump"]
                      }, sort_keys=True,indent=4, separators=(',', ': '))
    ","
