package com.example.payload.request;

public class FriendRequest {
	private Long firstUserId;
	private Long secondUserId;

	public Long getFirstUserId() {
		return firstUserId;
	}
	public void setFirstUserId(Long firstUserId) {
		this.firstUserId = firstUserId;
	}
	public Long getSecondUserId() {
		return secondUserId;
	}
	public void setSecondUserId(Long secondUserId) {
		this.secondUserId = secondUserId;
	}

}
