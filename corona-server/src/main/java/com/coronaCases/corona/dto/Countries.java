package com.coronaCases.corona.dto;

import java.util.Date;

public class Countries {
        String Country;
        String CountryCode;
        String Slug;
        long NewConfirmed;
        long TotalConfirmed;
        long NewDeaths;
        long TotalDeaths;
        long NewRecovered;
        long TotalRecovered;
        Date date;

    public String getCountry() {
        return Country;
    }

    public void setCountry(String country) {
        Country = country;
    }

    public String getCountryCode() {
        return CountryCode;
    }

    public void setCountryCode(String countryCode) {
        CountryCode = countryCode;
    }

    public String getSlug() {
        return Slug;
    }

    public void setSlug(String slug) {
        Slug = slug;
    }

    public long getNewConfirmed() {
        return NewConfirmed;
    }

    public void setNewConfirmed(long newConfirmed) {
        NewConfirmed = newConfirmed;
    }

    public long getTotalConfirmed() {
        return TotalConfirmed;
    }

    public void setTotalConfirmed(long totalConfirmed) {
        TotalConfirmed = totalConfirmed;
    }

    public long getNewDeaths() {
        return NewDeaths;
    }

    public void setNewDeaths(long newDeaths) {
        NewDeaths = newDeaths;
    }

    public long getTotalDeaths() {
        return TotalDeaths;
    }

    public void setTotalDeaths(long totalDeaths) {
        TotalDeaths = totalDeaths;
    }

    public long getNewRecovered() {
        return NewRecovered;
    }

    public void setNewRecovered(long newRecovered) {
        NewRecovered = newRecovered;
    }

    public long getTotalRecovered() {
        return TotalRecovered;
    }

    public void setTotalRecovered(long totalRecovered) {
        TotalRecovered = totalRecovered;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
