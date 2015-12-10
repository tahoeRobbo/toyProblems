//To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as arrays of integers [start_time, end_time]. These integers represent the number of 30-minute blocks past 9:00am.
//
//For example:
//
//  [2, 3] # meeting from 10:00 – 10:30 am
//[6, 9] # meeting from 12:00 – 1:30 pm
//
//Write a function condense_meeting_times() that takes an array of meeting time ranges and returns an array of condensed ranges.
//
//For example, given:
//
//  [ [0, 1], [3, 5], [4, 8], [10, 12], [9, 10] ]
//
//your function would return:
//
//  [ [0, 1], [3, 8], [9, 12] ]
//
//Do not assume the meetings are in order. The meeting times are coming from multiple teams.
//
//In this case the possibilities for start_time and end_time are bounded by the number of 30-minute slots in a day. But soon you plan to refactor HiCal to store times as Unix timestamps (which are big numbers). Write something that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges.

//first attempt
function meetingTimes(arrArr) {
	var sortedArr = arrArr.sort(function(a,b) { return a[0] - b[0];});
	console.log(sortedArr)

	
	var meetingStart = sortedArr[0][0];
	var meetingEnd = sortedArr[0][1];
	var flattenedMeetingTimes = [];

	for(var i = 1; i < sortedArr.length; i++) {
		if(sortedArr[i][0] <= meetingEnd ) {
			meetingEnd = sortedArr[i][1];
		}
		if(sortedArr[i][0] > meetingEnd) {
			flattenedMeetingTimes.push([meetingStart, meetingEnd]);
			meetingStart = sortedArr[i][0];
			meetingEnd = sortedArr[i][1];
		}
	}
	if(flattenedMeetingTimes[flattenedMeetingTimes.length-1] !== [meetingStart, meetingEnd]){
		flattenedMeetingTimes.push([meetingStart, meetingEnd]);
	}
	
	return flattenedMeetingTimes;
	
}
meetingTimes([ [0, 1], [3, 5], [4, 8], [10, 12], [9, 10] ]);



//ruby solution
//
//  def merge_ranges(meetings)
//    # sort by start times, breaking ties with end times
//    sorted_meetings = meetings.sort
//    # meetings only go in merged_meetings when we're sure they can't be merged further
//    merged_meetings = []
//
//    previous_meeting_start, previous_meeting_end = sorted_meetings[0]
//
//    sorted_meetings[1..-1].each do |current_meeting_start, current_meeting_end|
//        # if the previous meeting can be merged with the current one
//        # that is, if current meeting starts before previous meeting ends:
//        if current_meeting_start <= previous_meeting_end
//            # merge the current_meeting back into the previous_meeting
//            # and keep the resulting meeting as the previous_meeting
//            # because this newly-merged meeting might still
//            # need to be merged with the next meeting
//            previous_meeting_end = [current_meeting_end, previous_meeting_end].max
//        # else the previous meeting can't be merged with anything else
//        else
//            # put it in merged_meetings
//            # and move on to trying to merge the current meeting into subsequent meetings
//            merged_meetings.push([previous_meeting_start, previous_meeting_end])
//            previous_meeting_start, previous_meeting_end = \
//                current_meeting_start, current_meeting_end
//        end
//    end
//
//    # put last meeting we were trying to merge in our final set
//    merged_meetings.push([previous_meeting_start, previous_meeting_end])
//
//    return merged_meetings
//end

//



//var app = angular.module('familyAlbum');
//
//app.controller('photosCtrl', function($scope, $firebaseObject, FIREBASE_URL, service, $rootScope, $firebaseArray){
//	var imgRef = new Firebase(FIREBASE_URL + 'photos/');
//	var photos = $firebaseArray(imgRef);
//	$scope.photos = photos;
//	$scope.preview = false;
//	$scope.deletePhotoDropdown = false;
///*	$scope.addPhoto = function() {
//		photos.title = $scope.photo.filename;
//		photos.date = Firebase.ServerValue.TIMESTAMP;
//		photos.firstname = $rootScope.currentUser.firstname;
//		photos.lastname = $rootScope.currentUser.lastname;
//		photos.email = $rootScope.currentUser.email;
//		photos.img = $scope.photo.data;
//		photos.text = "test text, the function did fire";
//		photos.$save();
//	}*/
//	
///*	$scope.addPhoto = function(photo) {
//		console.log(photo)2
//		console.log($scope.photo)
//		photos.Photo = {
////			title : $scope.photo.filename,
//			date : Firebase.ServerValue.TIMESTAMP,
//			firstname : $rootScope.currentUser.firstname,
//			lastname : $rootScope.currentUser.lastname,
//			email : $rootScope.currentUser.email,
////			image : $scope.photo.data,
//		}
//		
//		photos.$save();
//	}
//	*/
//	//DOESNT NOT WORK WITH NG-MODEL / NG-CLICK!!  TRYING TO READ INPUT FILE OUTSIDE OF JS, STORE AS GLOBAL VARIABLE
//	/*$scope.previewFile = function() {
//		var preview = document.querySelector('img');
//		var file = $scope.picInput;
//		var reader = new FileReader();
//		
//		reader.onloadend = function() {
//			preview.src = reader.result;
//		}
//		
//		if(file) {
//			reader.readDataAsURL(file);
//		} else {
//			preview.src = '';
//		}
//	};*/
//	
//	$scope.togglePreview = function() {
//		$scope.preview = !$scope.preview;
//	};
//	
//	$scope.test = "Linked from photosCtrl";
//	
//	$scope.showDeletePhotoDropdown = function() {
//		$scope.showDeletePhotoDropdown = true;
//	}
//	
//	$scope.cancelDeletePhoto = function() {
//		$scope.showDeletePhotoDropdown = false;
//	}
//	
//	$scope.removePhoto = function(key) {
//		photos.$remove(key);
//		$scope.showDeletePhotoDropdown = false;
//	};
//}); // photosCtrl
