package ccarrot.Api;

import ccarrot.domain.Member;
import ccarrot.domain.RoleType;
import ccarrot.service.MemberService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Column;
import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class MemberApiController {

    private final MemberService memberService;

    @PostMapping("/api/members")
    public CreateMemberResponse saveMember (@RequestBody @Valid CreateMemberRequest request) {

        Member member = new Member();
        member.setMember_type(request.getMember_type());
        member.setMember_id(request.getMember_id());
        member.setMember_password(request.getMember_password());
        member.setMember_email(request.getMember_email());
        member.setMember_hp(request.getMember_hp());
        member.setMember_nickname(request.getMember_nickname());

        Long id = memberService.join(member);
        return new CreateMemberResponse(id);
    }

    @GetMapping("/api/members")
    public MemberList findAllMember () {
        List<Member> findMembers = memberService.findMember();
        List<MemberDto> collect = findMembers.stream()
                .map(m -> new MemberDto(m.getMember_type(), m.getMember_id(), m.getMember_email(), m.getMember_hp(),m.getMember_nickname()))
                .collect(Collectors.toList());
        return new MemberList(collect.size(), collect);
    }

    @Data
    static class CreateMemberRequest {
        private RoleType member_type;
        private String member_id;
        private String member_password;
        private String member_email;
        private String member_hp;
        private String member_nickname;
    }

    @Data
    private class CreateMemberResponse {
        private Long id;
        public CreateMemberResponse(Long id) {
            this.id = id;
        }
    }

    @Data
    @AllArgsConstructor
    static class MemberDto {
        private RoleType member_type;
        private String member_id;
        private String member_email;
        private String member_hp;
        private String member_nickname;
    }

    @Data
    @AllArgsConstructor
    static class MemberList<T> {
        private int total_record;
        private T data;
    }
}
