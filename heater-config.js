// Preheater and Postheater Configuration

const preheaters = {
  "123-XXX": [
    { value: "25-N", text: "None", datacapacity: 0 },
    { value: "25-B_L", text: "Low (--kW)" , datacapacity: 0},
    { value: "25-B_H", text: "High (--kW)", datacapacity: 0 },
  ],
  "123-M01": [
    { value: "25-N", text: "None", datacapacity: 0 },
    { value: "25-B_L", text: "Low ( 3kW)", datacapacity: 3 },
    { value: "25-B_H", text: "High ( 5kW)", datacapacity: 5 },
  ],
  "123-M02": [
    { value: "25-N", text: "None", datacapacity: 0 },
    { value: "25-B_L", text: "Low ( 5kW)", datacapacity: 5 },
    { value: "25-B_H", text: "High (10kW)", datacapacity: 10 },
  ],
  "123-M03": [
    { value: "25-N", text: "None", datacapacity: 0 },
    { value: "25-B_L", text: "Low ( 8kW)", datacapacity: 8 },
    { value: "25-B_H", text: "High (15kW)", datacapacity: 15 },
  ],
  "123-M04": [
    { value: "25-N", text: "None", datacapacity: 0 },
    { value: "25-B_L", text: "Low (10kW)", datacapacity: 10 },
    { value: "25-B_H", text: "High (19kW)", datacapacity: 19 },
  ],
  "123-M05": [
    { value: "25-N", text: "None", datacapacity: 0 },
    { value: "25-B_L", text: "Low (12kW)", datacapacity: 12 },
    { value: "25-B_H", text: "High (24kW)", datacapacity: 24 },
  ],
  "123-M06": [
    { value: "25-N", text: "None", datacapacity: 0 },
    { value: "25-B_L", text: "Low (15kW)", datacapacity: 15 },
    { value: "25-B_H", text: "High (29kW)", datacapacity: 29 },
  ],
  "123-M07": [
    { value: "25-N", text: "None", datacapacity: 0 },
    { value: "25-B_L", text: "Low (17kW)", datacapacity: 17 },
    { value: "25-B_H", text: "High (34kW)", datacapacity: 34 },
  ],
  "123-M08": [
    { value: "25-N", text: "None", datacapacity: 0 },
    { value: "25-B_L", text: "Low (19kW)", datacapacity: 19 },
    { value: "25-B_H", text: "High (38kW)", datacapacity: 38 },
  ],
  "123-M09": [
    { value: "25-N", text: "None", datacapacity: 0 },
    { value: "25-B_L", text: "Low (22kW)", datacapacity: 22 },
    { value: "25-B_H", text: "High (43kW)", datacapacity: 43 },
  ],
  "123-M10": [
    { value: "25-N", text: "None", datacapacity: 0 },
    { value: "25-B_L", text: "Low (24kW)", datacapacity: 24 },
    { value: "25-B_H", text: "High (48kW)", datacapacity: 48 },
  ]
};

const postheaters = {
  "123-XXX": [
    { value: "26-N", text: "None", datacapacity: 0 },
    { value: "26-B_L", text: "Low (--kW)", datacapacity: 0 },
    { value: "26-B_H", text: "High (--kW)", datacapacity: 0 },
  ],
  "123-M01": [
    { value: "26-N", text: "None", datacapacity: 0 },
    { value: "26-B_L", text: "Low ( 6kW)", datacapacity: 6 },
    { value: "26-B_H", text: "High ( 9kW)", datacapacity: 9 },
  ],
  "123-M02": [
    { value: "26-N", text: "None", datacapacity: 0 },
    { value: "26-B_L", text: "Low (12kW)", datacapacity: 12 },
    { value: "26-B_H", text: "High (17kW)", datacapacity: 17 },
  ],
  "123-M03": [
    { value: "26-N", text: "None", datacapacity: 0 },
    { value: "26-B_L", text: "Low (18kW)", datacapacity: 18 },
    { value: "26-B_H", text: "High (25kW)", datacapacity: 25 },
  ],
  "123-M04": [
    { value: "26-N", text: "None", datacapacity: 0 },
    { value: "26-B_L", text: "Low (24kW)", datacapacity: 24 },
    { value: "26-B_H", text: "High (34kW)", datacapacity: 34 },
  ],
  "123-M05": [
    { value: "26-N", text: "None", datacapacity: 0 },
    { value: "26-B_L", text: "Low (30kW)", datacapacity: 30 },
    { value: "26-B_H", text: "High (42kW)", datacapacity: 42 },
  ],
  "123-M06": [
    { value: "26-N", text: "None", datacapacity: 0 },
    { value: "26-B_L", text: "Low (36kW)", datacapacity: 36 },
    { value: "26-B_H", text: "High (50kW)", datacapacity: 50 },
  ],
  "123-M07": [
    { value: "26-N", text: "None", datacapacity: 0 },
    { value: "26-B_L", text: "Low (42kW)", datacapacity: 42 },
    { value: "26-B_H", text: "High (59kW)", datacapacity: 59 },
  ],
  "123-M08": [
    { value: "26-N", text: "None", datacapacity: 0 },
    { value: "26-B_L", text: "Low (48kW)", datacapacity: 48 },
    { value: "26-B_H", text: "High (67kW)", datacapacity: 67 },
  ],
  "123-M09": [
    { value: "26-N", text: "None", datacapacity: 0 },
    { value: "26-B_L", text: "Low (54kW)", datacapacity: 54 },
    { value: "26-B_H", text: "High (75kW) **OVER 68kW UNIT NOT ETL LISTED**", datacapacity: 75 },
  ],
  "123-M10": [
    { value: "26-N", text: "None", datacapacity: 0 },
    { value: "26-B_L", text: "Low (60kW)", datacapacity: 60 },
    { value: "26-B_H", text: "High (84kW) **OVER 68kW UNIT NOT ETL LISTED**", datacapacity: 84 },
  ]
};
