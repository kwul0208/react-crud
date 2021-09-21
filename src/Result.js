import React from "react";

export default function Result({ data, update, hapus }) {
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

                                    <button type="button" class="btn btn-warning " onClick={() => update(d.id)}>Edit</button>
                                    <button type="button" class="btn btn-danger ms-2" onClick={() => hapus(d.id)}>Hapus</button>

                                </td>
                            </tr>
                        </tbody>
                    )
                })
            }

        </table>
    )
}