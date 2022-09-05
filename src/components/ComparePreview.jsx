import React from "react";
import { v4 as uuidv4 } from "uuid";

const ComparePreview = ({ pokemon1, pokemon2 }) => {
    return (
        <div className="preview-table">

            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Sprite</th>
                        <th>Hp</th>
                        <th>Attack</th>
                        <th>Defense</th>
                        <th>S-Attack</th>
                        <th>S-Defense</th>
                        <th>Speed</th>
                    </tr>

                    <tr>
                        <td>{pokemon1.name
                                .toLowerCase()
                                .split(' ')
                                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                .join(' ')}</td>

                        <td style={{ color: pokemon1.height > pokemon2.height ? "green" : "red" }} >
                            {pokemon1.height}
                        </td>

                        <td><img src={pokemon1.sprites.front_default} alt="" /></td>

                        
                        {pokemon1.stats.map((stat, j) => {
                            return (
                                <td
                                    key={uuidv4()}
                                    style={{
                                    color:
                                    pokemon2.stats[j].base_stat < stat.base_stat
                                    ? "green"
                                    : "red",
                                    }}
                                >
                                    {stat.base_stat}
                                </td>
                            );
                        })}
                    </tr>

                    <tr>
                        <td>{pokemon2.name
                                .toLowerCase()
                                .split(' ')
                                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                .join(' ')}</td>

                        <td
                            style={{ color: pokemon1.height < pokemon2.height ? "green" : "red" }}
                        >
                            {pokemon2.height}
                        </td>

                        <td>
                            <img src={pokemon2.sprites.front_default} alt="" />
                        </td>

                        {pokemon2.stats.map((stat, i) => {
                            return (
                                <td
                                    key={uuidv4()}
                                    style={{
                                    color:
                                    pokemon1.stats[i].base_stat < stat.base_stat
                                    ? "green"
                                    : "red",
                                    }}
                                >
                                    {stat.base_stat}
                                </td>
                            );
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ComparePreview