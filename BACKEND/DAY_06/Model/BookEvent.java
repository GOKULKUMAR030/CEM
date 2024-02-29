package com.example.adp.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Bookevents")
public class BookEvent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "corporate_name", nullable = false)
    private String corporateName;

    @Column(name = "event_name", nullable = false)
    private String eventName;

    @Column(name = "event_from_date", nullable = false)
    private String eventFromDate;

    @Column(name = "event_to_date", nullable = false)
    private String eventToDate;

    @Column(name = "country", nullable = false)
    private String country;

    @Column(name = "province", nullable = false)
    private String province;

    @Column(name = "venue", nullable = false)
    private String venue;

    @Column(name = "attendees_count", nullable = false)
    private int attendeesCount;

    @Column(name = "contact_no", nullable = false)
    private String contactNo;

    @Column(name = "contact_mail", nullable = false, unique = true)
    private String contactMail;
}
