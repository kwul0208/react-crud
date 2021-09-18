import React from "react";

export default function Result() {
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
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Tangerang, Indonesia</td>
                    <td>
                        <span class="badge bg-primary m-2">Primary</span>
                        <span class="badge bg-danger ">Danger</span>

                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Jawa Tengah, Indonesia</td>
                    <td>
                        <span class="badge bg-primary m-2">Primary</span>
                        <span class="badge bg-danger ">Danger</span>

                    </td>
                </tr>
            </tbody>
        </table>
    )
}