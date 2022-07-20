# importar la libreria flask
from flask import Flask, render_template
from flask import Flask, redirect, request,render_template, url_for

app = Flask(__name__, template_folder='templates') #Creamos una variable de tipo app y pedimos a la funcion Flask


@app.route('/')
def principal():
    """
    Esta función esta encarga de abrir la página principal
    para luego poder llamar a las demas subpáginas

    Returns:
        Retorna la página principal, denomindad index.html
    """
    #Index es nuestra página principal
    return render_template('/indexContact.html') 


if __name__ == '__main__':
    app.run(debug=True)