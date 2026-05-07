import React from 'react'
import { userContext, salaryContext } from '../../../App'


function ComponentF() {
    return (
        <div>
            {/* step second  */}

            <userContext.Consumer>
                {
                    user => {
                        return (
                            <salaryContext.Consumer>
                                {
                                    salary => {
                                        return <div>User context value {user}, And Salary is {salary}</div>
                                    }
                                }
                            </salaryContext.Consumer>
                        )
                    }
                }
            </userContext.Consumer>
        </div>
    )
}

export default ComponentF