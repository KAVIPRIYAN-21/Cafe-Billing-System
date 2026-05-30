package com.cafe.backend.controller;

import com.cafe.backend.model.BillRecord;
import com.cafe.backend.service.BillingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/bills")
public class BillingController {

    @Autowired
    private BillingService billingService;

    @PostMapping("/save")
    public BillRecord saveBill(@RequestBody BillRecord record) {
        return billingService.saveBill(record);
    }

    @GetMapping("/daily")
    public List<BillRecord> getDaily() {
        return billingService.getBillsByDay();
    }

    @GetMapping("/weekly")
    public List<BillRecord> getWeekly() {
        return billingService.getBillsByWeek();
    }

    @GetMapping("/monthly")
    public List<BillRecord> getMonthly() {
        return billingService.getBillsByMonth();
    }

    @GetMapping("/yearly")
    public List<BillRecord> getYearly() {
        return billingService.getBillsByYear();
    }

    @GetMapping("/highest")
    public BillRecord getHighest() {
        return billingService.getHighestBill();
    }

    @GetMapping("/lowest")
    public BillRecord getLowest() {
        return billingService.getLowestBill();
    }
}
