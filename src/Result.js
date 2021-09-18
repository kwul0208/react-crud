import React from "react";

export default function Result({ data }) {
    console.log(data)
    let n = 0;
    return (
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">ation</th>
                </tr>
            </thead>
            {

                data.map(d => {
                    n++

                    return (
                        <tbody>
                            <tr>
                                <th scope="row">{n}</th>
                                <td>{d.name}</td>
                                <td>{d.address}</td>
                                <td>
                                    <span class="badge bg-primary m-2">Primary</span>
                                    <span class="badge bg-danger ">Danger</span>

                                </td>
                            </tr>
                        </tbody>
                    )
                })
            }

        </table>
    )
}