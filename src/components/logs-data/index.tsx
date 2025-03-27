"use client"

import { DataTable } from "../ui/data-table"
import { columns } from './columns'
import styles from './logs-data.module.scss'  // Import the SCSS module

const LogsData = () => {
    return (
        <div className={styles.container}> {/* Apply the class here */}
            <DataTable columns={columns} data={[]}/>
        </div>
    )
}

export default LogsData
