import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import styles from './History.module.css';
import { GlobalContext } from '../../Globals/Globals'
import csv from 'csvtojson';

export const ImportExcel = () => {
    const { setTransaction } = useContext(GlobalContext);
    
    const handleFiles = (files) => {
                
        if (window.FileReader) {
            try {
                getAsText(files[0]);
            } catch (error) {
                console.log(error);
            }
        }
    }

    const getAsText = (fileToRead) => {
        let reader = new FileReader;
        
        reader.readAsText(fileToRead);
        
        reader.onload = (event) => {
            const fileInCSV = event.target.result;
            let toJSON = [];

            csv({ output: "csv" }).fromString(fileInCSV).then(function (result) {
                
                result.map((transaction) => {
                    const newTransaction = {
                        id: parseInt(transaction[0]),
                        text: transaction[1],
                        amount: parseFloat(transaction[2])
                    }
                    toJSON.unshift(newTransaction);
                });
                setTransaction(toJSON)
            })
        };
        reader.onerror = (event) => {
            if (event.target.error.name) {
                alert(event.target.error.name);
            }
        };
    }


    return (
      <div className={styles.UDB}>
            <input onChange={(e) => {handleFiles(e.target.files)}} id="contained-button-file" type="file" style={{ display: 'none' }} />
            <label htmlFor="contained-button-file">
                <Button size="small" component="span">
                    UPLOAD
                </Button>
            </label>
        </div>
    );
}

export default ImportExcel;