package com.nanum.nadoo.Controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.nanum.nadoo.Service.NadooService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@CrossOrigin(origins="*")
@RestController
@Log4j2
public class NadooController {

  @Autowired
  NadooService service;

  @RequestMapping("/nadoo")
  public String getAllUsers() {
//    List<Users> temp = service.getUsers();
//    Gson gson = new GsonBuilder().setPrettyPrinting().create();
//
//    return gson.toJson(temp);
    return "";
  }

  // 최신 나두 (등록일 최신순 거래 리스트 반환)
  @RequestMapping("/nadoo/recentTrades")
  public String recentTrades(){
    Map<String, Object> result = service.getRecentTrades();
//    Gson gson = new GsonBuilder().setPrettyPrinting().create();
    Gson gson = new Gson();

    return gson.toJson(result);
  }

  // 종료 임박 (종료일 내림차순 거래 리스트 반환)
  @RequestMapping("/nadoo/closerTrades")
  public String closerTrades(){
    Map<String, Object> result = service.getCloserTrades();
    Gson gson = new GsonBuilder().setPrettyPrinting().create();

    return gson.toJson(result);
  }
}
