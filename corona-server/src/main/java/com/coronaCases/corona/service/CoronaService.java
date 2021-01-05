package com.coronaCases.corona.service;

import com.coronaCases.corona.dto.Countries;
import com.coronaCases.corona.dto.Global;
import com.coronaCases.corona.dto.Summary;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Service;
import org.json.simple.parser.ParseException;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

@Service
public class CoronaService {

    public Summary getSummaryData() {
        try {
            URL url = new URL("https://api.covid19api.com/summary");
            int responseCode = getResponseCode(url);
            if (responseCode != 200) {
                throw new RuntimeException("HttpResponse code" + responseCode);
            } else {
                return getSummaryChainData(url);
            }
        } catch (IOException | ParseException e) {
            e.printStackTrace();
            return new Summary();
        }
    }

    public int getResponseCode(URL url) throws IOException {
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");
        connection.connect();
        return connection.getResponseCode();
    }

    public Summary getSummaryChainData(URL url)
            throws IOException, ParseException {
        Summary summaryData = new Summary();
        Scanner sc = new Scanner(url.openStream());
        String inline = "";
        while (sc.hasNext()) {
            inline = inline.concat(sc.nextLine());
        }

        JSONParser parse = new JSONParser();
        JSONObject obj = (JSONObject) parse.parse(inline);

        Gson gson = new GsonBuilder().create();

        if (obj != null) {
            JSONObject jsonObject = null;
            List<Countries> countriesList = new ArrayList<Countries>();
            JSONObject global = (JSONObject) obj.get("Global");

            JSONArray jsonArray = (JSONArray) obj.get("Countries");

            for (Object o : jsonArray) {
                jsonObject = (JSONObject) o;
                Countries country = gson.fromJson(jsonObject.toJSONString(), Countries.class);
                countriesList.add(country);
            }

            Global globalData = gson.fromJson(global.toJSONString(), Global.class);
            summaryData.setGlobal(globalData);
            summaryData.setCountries(countriesList);
        }
        return summaryData;
    }
}