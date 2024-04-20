from pymongo import MongoClient
from flask import Flask, jsonify, request
from flask_cors import CORS

app= Flask(__name__)
CORS(app)

# Establecer la conexión a MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['godoycruzdatabase']
collectionJugadores = db['jugadores']
collectionCuerpoTecnico = db['cuerpo-tecnico']
collectionTabla = db['table']

campañas = client['temporadas']

@app.route("/")
def root():
    return "Home"

@app.route("/test_mongo")
def test_mongo():
    try:
        client.server_info()
        return "MongoDB connection successful!"
    except:
        return "Error: Cannot connect to MongoDB"

@app.route("/jugadores/")
def get_jug_all():
    try:
        jugadores = collectionJugadores.find()
        cuerpoTecnico = collectionCuerpoTecnico.find()
        if jugadores and cuerpoTecnico:
            jug_list = []
            for jug in jugadores:
                jug_dict = {
                    "Num": jug["Num"],
                    "Nombre": jug["Nombre"],
                    "Nac": jug["Nac"],
                    "Pos": jug["Pos"],
                    "Edad": jug["Edad"]
                }
                jug_list.append(jug_dict)
            ct_list = []
            for ct in cuerpoTecnico:
                ct_dict = {
                    'Cargo': ct['Cargo'],
                    'Nombre': ct['Nombre']
                }
                ct_list.append(ct_dict)
            plantel_list = [jug_list, ct_list]
            return jsonify(plantel_list), 200
        else:
            return jsonify({"error": "No hay jugadores"}), 404
    except Exception as e:
        return jsonify({"error": f"Error: {str(e)}"}), 500

@app.route("/tabla/")
def get_table():
    try:
        tabla = collectionTabla.find()
        if tabla:
            equipoList = []
            for temp in tabla:
                equipoDict = {
                    "Pos": temp["Pos"],
                    "Equipo": temp["Equipo"],
                    "Pts": temp["Pts"],
                    "PJ": temp["PJ"],
                    "PG": temp["PG"],
                    "PE": temp["PE"],
                    "PP": temp["PP"],
                    "GF": temp["GF"],
                    "GC": temp["GC"],
                    "DIF": temp["DIF"]
                }
                equipoList.append(equipoDict)
            return jsonify(equipoList), 200
        else:
            return jsonify({"error": "No hay equipos"}), 404
    except Exception as e:
        return jsonify({"error": f"Error: {str(e)}"}), 500
    
@app.route("/temporada/<campeonato>")
def get_temporada(campeonato):
    try:
        collectionTemp = campañas[campeonato]
        temporada = collectionTemp.find()
        if temporada:
            tempList = []
            for temp in temporada:
                tempDict = {
                    "Local": temp["local"],
                    "Lg": temp["lg"],
                    "Vg": temp["vg"],
                    "Visitante": temp["visitante"],
                    "Dia": temp["dia"],
                    "Estadio": temp["Estadio"],
                    "Youtube": temp["Youtube"],
                    "Fecha": temp["fecha"],
                    "Resultado": temp["resultado"]
                }
                tempList.append(tempDict)
            return jsonify(tempList), 200
        else:
            return jsonify({"error": "No hay temporada"}), 404
    except Exception as e:
        return jsonify({"error": f"Error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)