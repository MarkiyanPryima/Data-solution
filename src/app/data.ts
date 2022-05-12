const data = {
  "US parameter": {
    "Frequency min (MHz)": "5",
    "Frequency max (MHz)": "204",
    "US signal Power (dBmV)": "10",
    "Return Attenuation (dB)": "NA",
    "RPD PRE (dB)": "19",
    "RPD AMP (dB)": "-1",
    "Frequency tested (MHZ)": "5/50/95/140/185",
    "US low frequency power LL (dBmV)": "8",
    "US middle frequency power LL (dBmV)": "8",
    "US high frequency power LL (dBmV)": "8",
    "US full band power UL (dBmV)": "12",
    "US Flatness LL (dB)": "3",
    "CNR 6.4MHz band LL (dB)": "40",
    "CNR 5-10MHz LL (dB)": "NA",
    "CNR 10-Fmax MHz LL (dB)": "NA",
    "low frequency AVG Spurious LL (dB)": "50",
    "middle frequency AVG Spurious LL (dB)": "50",
    "high frequency AVG Spurious LL (dB)": "50",
    "low frequency Max Spurious LL (dB)": "50",
    "middle frequency Max Spurious LL (dB)": "50",
    "high frequency Max Spurious LL (dB)": "50",
    "low frequency Isolation LL (dB)": "NA",
    "middle frequency Isolation LL (dB)": "NA",
    "high frequency Isolation LL (dB)": "NA"
  },
  "DS parameter": {
    "Frequency min (MHz)": "54",
    "Frequency max (MHz)": "1218",
    "LineUp": "PEBBLE_HR",
    "TCP (dBmV)": "63.8",
    "TCP LL (dBmV)": "63.55",
    "TCP UL (dBmV)": "64.05",
    "Tilt (dB)": "13",
    "Tilt LL (dB)": "12.75",
    "Tilt UL (dB)": "13.25",
    "Flatness UL (dB)": "0.5",
    "MER LineUp": "PEBBLE_HR",
    "MER PCAP file": "snop_U_5ofdm.pcap",
    "MER QAM Frequency (MHz)": "57",
    "MER OFDM Frequency (MHz)": "738",
    "MER QAM LL (dB)": "46",
    "MER OFDM LL (dB)": "46",
    "Frequency offset (Hz)": "6000",
    "BER UL (on 1E10 Bits)": "1E-8",
    "AGC LL (dB)": "0.3",
    "RF Power LL (dB)": "50",
    "PSA attenuation (dB)": "0/0.1/0.5/1/10",
    "PSA LL (dB)": "-0.8/0/0.3/0.8/9",
    "PSA UL (dB)": "0.8/0.2/0.7/1.2/11",
    "ACPR Low frequency  LL (dBc)": "47/47/46/46/45",
    "ACPR High frequency  LL (dBc)": "47/47/45/47/47",
    "PPQ nominal (dBmV)": "46.5",
    "PPQ AGC (dBmV)": "58",
    "PPQ RF Power (dBmV)": "46.5",
    "43": "43",
    "PPQ OFDM (dBmV)": "43",
    "PPQ ACP (dBmV)": "46.5",
    "Power tuning LL": "-5",
    "Power tuning UL": "5",
    "Tilt tuning LL": "-1.5",
    "Tilt tuning UL": "4"
  },
  "DSA configuration": {
    "MAIN attenuation": "20",
    "MAIN RLEV": "-25",
    "MAIN PreAmp": "OFF",
    "TCP attenuation": "15",
    "TCP RLEV": "-25",
    "TCP PreAmp": "OFF",
    "RF ON attenuation": "15",
    "RF ON RLEV": "-25",
    "RF ON PreAmp": "OFF",
    "RF OFF attenuation": "-65",
    "RF OFF RLEV": "OFF",
    "RF OFF PreAmp": "18",
    "FaT attenuation": "-30",
    "FaT RLEV": "OFF",
    "FaT PreAmp": "11",
    "Low ACPR attenuation": "-45",
    "Low ACPR RLEV": "OFF",
    "Low ACPR PreAmp": "8",
    "High ACPR attenuation": "-45",
    "High ACPR RLEV": "OFF"
  }
}

const arrayOfObj = Object.entries(data).map((e) => ({[e[0]]: e[1]}));

export const res = arrayOfObj.map(e => {
  return {
    name: Object.keys(e)[0], value: Object.entries(Object.values(e)[0]).map(e => {
      return {name: e[0], value: e[1]}
    })
  }
})

