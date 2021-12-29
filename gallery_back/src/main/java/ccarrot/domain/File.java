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
public class File {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "file_seq")
    @ToString.Exclude
    private long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="gallery_seq")
    @ToString.Exclude
    private Gallery gallerySeq;

    @Column(name = "file_dir")
    private String fileDir;

    @Column(name = "file_origin_name")
    private String file_origin_name;

    @Column(name = "file_name")
    private String file_name;

    @Column(name = "file_type")
    private FileType file_type;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        File file = (File) o;
        return Objects.equals(id, file.id);
    }

    @Override
    public int hashCode() {
        return 0;
    }
}
