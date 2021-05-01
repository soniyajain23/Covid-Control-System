package com.loizenai.jwtauthentication.model;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.Authentication;
//package com.loizenai.jwtauthentication.model.User;
import javax.persistence.*;
import java.security.Principal;
import java.util.Map;

@Entity
@Table(name = "permission")
public class Permission {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long pid;
    private String email;
    private String msg;
    private String day;
    private String status;
/*
    public Permission(long pid, String email, String msg, String day, String status, String name, int duration) {
        this.pid = pid;
        this.email = email;
        this.msg = msg;
        this.day = day;
        this.status = status;
        this.name = name;
        this.duration = duration;
    }
*/
    private String name;
    private int duration;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setName(String name) {
        this.name = name;
    }



    public long getPid() {
        return pid;
    }

    public void setPid(long pid) {
        this.pid = pid;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
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

    public String getName() {


        return name;
    }

}
