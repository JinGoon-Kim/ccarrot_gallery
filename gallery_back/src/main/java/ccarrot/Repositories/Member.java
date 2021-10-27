package ccarrot.Repositories;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_seq")
    @ToString.Exclude
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Member member = (Member) o;
        return Objects.equals(id, member.id);
    }

    @Override
    public int hashCode() {
        return 0;
    }
}

