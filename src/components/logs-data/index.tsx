"use client"

import { DataTable } from "../ui/data-table"
import { columns } from './columns'
import styles from './logs-data.module.scss' 

const LogsData = () => {
    return (
        <div className={styles.container}>
            <DataTable columns={columns} data={[]}/>
        </div>
    )
}

export default LogsData
