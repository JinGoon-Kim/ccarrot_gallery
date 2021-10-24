package ccarrot.Repositories;

import javax.persistence.*;

public class File {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "file_seq")
    @OneToMany
    private long file_seq;

    @Column(name = "file_dir")
    private String file_dir;

    @Column(name = "file_name")
    private String file_name;

    @Column(name = "file_type")
    private FileType file_type;
}
