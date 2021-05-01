package com.loizenai.jwtauthentication.model;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalTime;

@Entity
@Table(name = "outing")
public class Outing {

    @Id
    private long id;
    private  String email;
    private String name;
    private String reason;
    private String day;
    private int duration; //in Hours
    private LocalTime outgoingtime;
    private LocalTime returningtime;

    public LocalTime getOutgoingtime() {
        return outgoingtime;
    }

    public void setOutgoingtime(LocalTime outgoingtime) {
        this.outgoingtime = outgoingtime;
    }

    public LocalTime getReturningtime() {
        return returningtime;
    }

    public void setReturningtime(LocalTime returningtime) {
        this.returningtime = returningtime;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }
}
