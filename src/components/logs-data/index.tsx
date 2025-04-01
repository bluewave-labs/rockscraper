"use client"

import { DataTable } from "../ui/data-table"
import { columns } from './columns'
import styles from './logs-data.module.scss'

import { useState, useEffect } from 'react'

const LogsData = () => {
    const [data, setData] = useState([
        {
            domain: "example.com",
            lastQuery: "2024-03-20 14:30:00",
            duration: 245,
            cost: 0.12,
            action: "Scrape"
        },
        {
            domain: "test-site.org",
            lastQuery: "2024-03-20 14:25:00",
            duration: 189,
            cost: 0.08,
            action: "Analyze"
        },
        {
            domain: "data-source.net",
            lastQuery: "2024-03-20 14:20:00",
            duration: 312,
            cost: 0.15,
            action: "Extract"
        }
    ])

    // useEffect(() => {

    // }, [])

    return (
        <div className={styles.container}>
            <DataTable columns={columns} data={data} />
        </div>
    )
}
export default LogsData
