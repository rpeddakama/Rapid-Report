import React, { useEffect, useState } from "react"
import { geoCentroid } from "d3-geo"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps"
import allStates from "../constants/allstates.json"
import { CallMissedSharp } from "@material-ui/icons"
import useStyles from "../../styles"

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"
const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
}

const Map = ({ topic }) => {
  const [sentiments, setSentiments] = useState()
  const classes = useStyles()
  const URL = process.env.SERVER_URL

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: topic,
      }),
    }
    fetch(`${URL}/getStateSentiments`, requestOptions)
      .then((data) => data.json())
      .then((res) => {
        // console.log("STATES RES", res)
        setSentiments(res)
      })
  }, [])

  const getColor = (geo) => {
    if (!sentiments) return
    // console.log("GEO", geo.properties.name, sentiments)
    var sent = sentiments[geo.properties.name]

    var col
    if (sent < -0.1) col = `rgb(${255 * -1 * sent + 60}, 0, 0)`
    else if (sent > 0.1) col = `rgb(0, ${255 * 1 * sent + 60}, 0)`
    else col = `rgb(255, 255, 40)`

    console.log("COL", col)
    return col
  }

  return (
    <ComposableMap projection="geoAlbersUsa" className={classes.map}>
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                fill={getColor(geo)}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))}
            {geographies.map((geo) => {
              const centroid = geoCentroid(geo)
              const cur = allStates.find((s) => s.val === geo.id)
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {cur.id}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {cur.id}
                        </text>
                      </Annotation>
                    ))}
                </g>
              )
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  )
}

export default Map
