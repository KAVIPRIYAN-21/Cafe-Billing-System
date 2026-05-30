package com.cafe.backend.service;

import com.cafe.backend.model.BillRecord;
import com.cafe.backend.repository.BillRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.TemporalAdjusters;
import java.util.List;

@Service
public class BillingService {

    @Autowired
    private BillRecordRepository repo;

    public BillRecord saveBill(BillRecord record) {
        if (record.getTimestamp() == null) {
            record.setTimestamp(LocalDateTime.now());
        }
        return repo.save(record);
    }

    public List<BillRecord> getBillsByDay() {
        LocalDateTime start = LocalDate.now().atStartOfDay();
        LocalDateTime end = start.plusDays(1);
        return repo.findByTimestampBetween(start, end);
    }

    public List<BillRecord> getBillsByWeek() {
        LocalDateTime start = LocalDate.now().with(TemporalAdjusters.previousOrSame(java.time.DayOfWeek.MONDAY)).atStartOfDay();
        LocalDateTime end = start.plusDays(7);
        return repo.findByTimestampBetween(start, end);
    }

    public List<BillRecord> getBillsByMonth() {
        LocalDateTime start = LocalDate.now().withDayOfMonth(1).atStartOfDay();
        LocalDateTime end = start.plusMonths(1);
        return repo.findByTimestampBetween(start, end);
    }

    public List<BillRecord> getBillsByYear() {
        LocalDateTime start = LocalDate.now().withDayOfYear(1).atStartOfDay();
        LocalDateTime end = start.plusYears(1);
        return repo.findByTimestampBetween(start, end);
    }

    public BillRecord getHighestBill() {
        return repo.findTopByOrderByTotalAmountDesc();
    }

    public BillRecord getLowestBill() {
        return repo.findTopByOrderByTotalAmountAsc();
    }
}
