import React, { Fragment, useState } from 'react';

const SubirArchivos= ({order, setOrder}) => {
    //Show error in case the fields are not completed (selects,name)
    const [error, setError] = useState(false)
    //Destructuring state order
    const { waiter, client, table, items, totalProducts, total } = order
    const updateStateOrder = (e) => {
        //update state
        setOrder({
            //copy of state
            ...order,
            [e.target.name]: e.target.value
        });

    }
    const formValidation = () => {
        if (waiter === "" ) {
            setError(true)
            return
        }
        setError(false)
        //order.date = new Date()

        //saveOrderBD(order)

        //Clean inputs
        setOrder({
            waiter: "",
            client: "",
            table: "",
            items: [],
            totalProducts: 0,
            total: 0,
            state: "pending"
        })

    }
    return(
        <Fragment>
        <form > 
            {/* Show error if the form is empty when click send the kitchen */}
            {error ? <p className="error-form">Todos los campos son obligatorios</p> : null}

            <select
                    name="waiter"
                    id="waiter"
                    value={waiter}
                    onChange={updateStateOrder}>
                    <option value="">Mesero</option>
                    <option value="Juan">Juan</option>
                    <option value="Alicia">Alicia</option>
                    <option value="Moises">Moises</option>
                </select>
                

  <button
    type="button"
    className="btn-send-kitchen"
    onClick={formValidation}
>Enviar Cocina</button>
    </form>
        </Fragment>
    )
}
export default SubirArchivos