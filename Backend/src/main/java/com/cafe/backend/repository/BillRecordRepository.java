package com.cafe.backend.repository;

import com.cafe.backend.model.BillRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface BillRecordRepository extends JpaRepository<BillRecord, Long> {

    List<BillRecord> findByTimestampBetween(LocalDateTime start, LocalDateTime end);

    BillRecord findTopByOrderByTotalAmountDesc();

    BillRecord findTopByOrderByTotalAmountAsc();
}
