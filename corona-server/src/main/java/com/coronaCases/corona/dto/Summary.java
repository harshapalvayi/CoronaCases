package com.coronaCases.corona.dto;

import java.sql.Timestamp;
import java.util.List;

public class Summary {
     String message;
     Global global;
     List<Countries> countries;
     Timestamp date;

     public String getMessage() {
          return message;
     }

     public void setMessage(String message) {
          this.message = message;
     }

     public Global getGlobal() {
          return global;
     }

     public void setGlobal(Global global) {
          this.global = global;
     }

     public List<Countries> getCountries() {
          return countries;
     }

     public void setCountries(List<Countries> countries) {
          this.countries = countries;
     }

     public Timestamp getDate() {
          return date;
     }

     public void setDate(Timestamp date) {
          this.date = date;
     }
}
