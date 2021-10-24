package ccarrot.Repositories;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Gallery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gallery_seq")
    private long gallery_seq;

    @Column(name = "member_seq")
    @JoinColumn(name = "Member")
    private long member_seq;

    @Column(name = "gallery_seq")
    @JoinColumn(name = "File")
    private String file_seq;

    @Column(name = "gallery_title")
    private String gallery_title;

    @Column(name = "gallery_content")
    private Lob gallery_content;
}
