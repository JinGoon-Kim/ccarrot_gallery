package ccarrot.domain;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Gallery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gallery_seq")
    private long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_seq")
    @ToString.Exclude
    private Member member_seq;

    @Column(name = "gallery_title")
    private String gallery_title;

    @Column(name = "gallery_content")
    private String gallery_content;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Gallery gallery = (Gallery) o;
        return Objects.equals(id, gallery.id);
    }

    @Override
    public int hashCode() {
        return 0;
    }
}
