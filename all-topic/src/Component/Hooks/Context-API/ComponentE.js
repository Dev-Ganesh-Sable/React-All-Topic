import React, { useContext } from 'react'
import ComponentF from '../Context-API/ComponentF'
import { userContext, salaryContext } from '../../../App'

function ComponentE() {

    const user = useContext(userContext);
    const salary = useContext(salaryContext);

    return (
        <div>
            {user} :- {salary}
        </div>
    )
}

export default ComponentE