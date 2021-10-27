package ccarrot.Repositories;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_seq")
    @OneToMany
    private Long id;

    @Column(name = "member_type")
    private RoleType member_type;

    @Column(name = "member_id")
    private String member_id;

    @Column(name = "member_password")
    private String member_password;

    @Column(name = "member_email")
    private String member_email;

    @Column(name = "member_hp")
    private String member_hp;

    @Column(name = "member_nickname")
    private String member_nickname;
}

